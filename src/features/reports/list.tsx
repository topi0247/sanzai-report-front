import { FaEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function ListItem() {
  return (
    <TableRow>
      <TableCell className="w-[40px] text-right">1</TableCell>
      <TableCell className="w-[80px]">書籍</TableCell>
      <TableCell>Git本</TableCell>
      <TableCell className="overflow-wrap-normal break-words whitespace-normal">
        Amazon
      </TableCell>
      <TableCell className="text-right">3,000</TableCell>
      <TableCell className="text-right">
        <Button variant={"ghost"} size={"icon"}>
          <FaEdit />
        </Button>
      </TableCell>
    </TableRow>
  );
}

export const ReportList = () => {
  return (
    <div className="relative">
      <Table className="w-full table-fixed">
        <TableHeader className="sticky top-0 z-10">
          <TableRow>
            <TableHead className="w-[40px]">No.</TableHead>
            <TableHead className="w-[80px]">分類</TableHead>
            <TableHead>内容</TableHead>
            <TableHead>購入場所</TableHead>
            <TableHead className="text-right">金額</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      <ScrollArea className="h-72">
        <Table className="w-full table-fixed">
          <TableBody>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};
