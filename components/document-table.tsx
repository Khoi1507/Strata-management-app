import { Download, Eye, FileText } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DocumentTableProps {
  category?: string
}

export function DocumentTable({ category }: DocumentTableProps) {
  const documents = [
    {
      id: 1,
      name: "AGM Minutes 2024",
      category: "minutes",
      uploadDate: "2024-12-15",
      uploadedBy: "Sarah Johnson",
      size: "1.2 MB",
      type: "PDF",
    },
    {
      id: 2,
      name: "Q1 Financial Report 2025",
      category: "financial",
      uploadDate: "2025-04-10",
      uploadedBy: "David Wilson",
      size: "2.5 MB",
      type: "PDF",
    },
    {
      id: 3,
      name: "Building By-Laws",
      category: "bylaws",
      uploadDate: "2023-05-20",
      uploadedBy: "Michael Chen",
      size: "3.1 MB",
      type: "PDF",
    },
    {
      id: 4,
      name: "Building Insurance Certificate",
      category: "insurance",
      uploadDate: "2025-01-15",
      uploadedBy: "Sarah Johnson",
      size: "1.8 MB",
      type: "PDF",
    },
    {
      id: 5,
      name: "Committee Meeting Minutes - March 2025",
      category: "minutes",
      uploadDate: "2025-03-25",
      uploadedBy: "Michael Chen",
      size: "0.9 MB",
      type: "PDF",
    },
    {
      id: 6,
      name: "Public Liability Insurance",
      category: "insurance",
      uploadDate: "2025-01-15",
      uploadedBy: "David Wilson",
      size: "2.2 MB",
      type: "PDF",
    },
    {
      id: 7,
      name: "Special By-Law: Pets",
      category: "bylaws",
      uploadDate: "2024-08-10",
      uploadedBy: "Sarah Johnson",
      size: "0.5 MB",
      type: "PDF",
    },
  ]

  const filteredDocuments = category ? documents.filter((d) => d.category === category) : documents

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Upload Date</TableHead>
          <TableHead>Uploaded By</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredDocuments.map((document) => (
          <TableRow key={document.id}>
            <TableCell className="font-medium flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              {document.name}
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  document.category === "minutes"
                    ? "default"
                    : document.category === "financial"
                      ? "secondary"
                      : document.category === "bylaws"
                        ? "outline"
                        : "destructive"
                }
              >
                {document.category}
              </Badge>
            </TableCell>
            <TableCell>{document.uploadDate}</TableCell>
            <TableCell>{document.uploadedBy}</TableCell>
            <TableCell>{document.size}</TableCell>
            <TableCell>{document.type}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button size="icon" variant="ghost">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View document</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download document</span>
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
