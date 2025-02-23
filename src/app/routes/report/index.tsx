import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ReportList } from "@/features/reports/list";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export const ReportIndex = () => {
  return (
    <article className="mt-4 flex flex-col gap-4">
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-start gap-2">
          <Label htmlFor="category" className="w-1/5">
            分類
          </Label>
          <Input id="category" placeholder="書籍" />
        </div>
        <div className="flex items-center justify-start gap-2">
          <Label htmlFor="name" className="w-1/5">
            内容
          </Label>
          <Input id="name" placeholder="Git本" />
        </div>
        <div className="flex items-center justify-start gap-2">
          <Label htmlFor="store" className="w-1/5">
            購入場所
          </Label>
          <Input id="store" placeholder="Amazon" />
        </div>
        <div className="flex items-center justify-start gap-2">
          <Label htmlFor="amount" className="w-1/5">
            金額
          </Label>
          <Input id="amount" placeholder="3000" type="number" min={0} />
        </div>
        <div className="text-center">
          <Button className="inline-block cursor-pointer transition-all">
            散財っ
          </Button>
        </div>
      </section>
      <Separator />
      <section>
        <div className="my-6 flex items-center justify-center gap-6">
          <Button variant="outline" size="icon">
            <IoIosArrowBack />
          </Button>
          <h2 className="inline-block w-36 pb-1 text-center text-2xl">
            2月の散財
          </h2>
          <Button variant="outline" size="icon">
            <IoIosArrowForward />
          </Button>
        </div>
        <div className="mb-8 grid grid-cols-3 items-center gap-1">
          <p className="text-center">昨年: 30,000円</p>
          <p className="text-center">今年: 30,000円</p>
          <p className="text-center text-lg text-red-300">+ 10,000</p>
        </div>
        <ReportList />
      </section>
    </article>
  );
};
