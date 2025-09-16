"use client"

import * as React from "react"
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  Row,
} from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { IconGripVertical, IconDotsVertical } from "@tabler/icons-react"
import { toast } from "sonner"

export type BlogRow = {
  id: number
  slug: string
  header: string
  type: string
  status: string
}

/* ---------- Drag handle ---------- */
function DragHandle({ id }: { id: number }) {
  const { attributes, listeners } = useSortable({ id })
  return (
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      className="text-muted-foreground size-7 hover:bg-transparent"
    >
      <IconGripVertical className="size-4" />
    </Button>
  )
}

/* ---------- Columns ---------- */
export function getColumns(onDelete: (slug: string) => Promise<void>): ColumnDef<BlogRow>[] {
  return [
    {
      id: "drag",
      header: () => null,
      cell: ({ row }) => <DragHandle id={row.original.id} />,
    },
    {
      accessorKey: "header",
      header: "Title",
      cell: ({ row }) => (
        <div className="max-w-xs truncate" title={row.original.header}>
          {row.original.header}
        </div>
      ),
    },
    {
      accessorKey: "type",
      header: "Category",
      cell: ({ row }) => (
        <Badge variant="outline" className="px-1.5">
          {row.original.type}
        </Badge>
      ),
    },
    {
      accessorKey: "status",
      header: "Published",
      cell: ({ row }) => (
        <Badge
          variant={row.original.status === "Published" ? "default" : "outline"}
          className="px-1.5"
        >
          {row.original.status}
        </Badge>
      ),
    },
    {
      id: "actions",
      header: () => null,
      cell: ({ row }) => {
        const [open, setOpen] = React.useState(false)
        return (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <IconDotsVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem onClick={() => console.log("Edit", row.original.id)}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => console.log("Duplicate", row.original.id)}>
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setOpen(true)} className="text-destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <AlertDialog open={open} onOpenChange={setOpen}>
              <AlertDialogTrigger asChild />
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete this blog? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-destructive text-white"
                    onClick={() => {
                      toast.promise(onDelete(row.original.slug), {
                        loading: "Deleting blog...",
                        success: "Blog deleted successfully!",
                        error: "Failed to delete blog.",
                      })
                      setOpen(false)
                    }}
                  >
                    Confirm
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        )
      },
    },
  ]
}

/* ---------- Draggable Row ---------- */
function DraggableRow({ row }: { row: Row<BlogRow> }) {
  const { transform, transition, setNodeRef } = useSortable({
    id: row.original.id,
  })
  return (
    <TableRow
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  )
}

/* ---------- DataTable Component ---------- */
export function DataTable({ data: initial }: { data: BlogRow[] }) {
  const [data, setData] = React.useState(initial)

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  )

  const ids = React.useMemo<UniqueIdentifier[]>(() => data.map((d) => d.id), [data])

  // Handle delete API
  const handleDelete = (slug: string) => {
    return fetch(`/api/blogs?slug=${slug}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setData((prev) => prev.filter((b) => b.slug !== slug))
        } else {
          return Promise.reject(json.error || "Failed to delete blog")
        }
      })
      .catch((err) => Promise.reject(err || "Error deleting blog"))
  }

  const table = useReactTable({
    data,
    columns: getColumns(handleDelete),
    getRowId: (row) => row.id.toString(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      setData((items) => {
        const oldIndex = ids.indexOf(active.id)
        const newIndex = ids.indexOf(over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
      >
        <Table>
          <TableHeader className="bg-muted sticky top-0 z-10">
            <TableRow>
              {table.getHeaderGroups()[0].headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <SortableContext items={ids} strategy={verticalListSortingStrategy}>
              {table.getRowModel().rows.map((row) => (
                <DraggableRow key={row.id} row={row} />
              ))}
            </SortableContext>
          </TableBody>
        </Table>
      </DndContext>
    </div>
  )
}
