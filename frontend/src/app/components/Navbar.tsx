import Link from "next/link";
import Image from "next/image";

const avbar = () => {
  return (
    <nav className="flex justify-between text-white text-lg p-2 bg-gradient-to-r from-[#090227] to-[#0D013F]">
      <div className="flex items-center gap-4">
        <Link href={"/"} className="flex items-center gap-2 pl-2">
          <Image src="/Hcu_logo.png" alt="HCU Logo" width={60} height={60} />
          <h1 className="text-sm font-bold p-2">
            มหาวิทยาลัยหัวเฉียวเฉลิมพระเกียรติ
            <br />
            สาขาปัญญาประดิษฐ์
          </h1>
        </Link>
      </div>

      <div className="flex gap-4 p-4 font-semibold">
        <Link href={"/"} className="p-2 hover:text-[#FF3D00]">หน้าแรก</Link>
        <Link href={"/news"} className="p-2 hover:text-[#FF3D00]">ข่าว</Link>
        <Link href={"/about"} className="p-2 hover:text-[#FF3D00]">เกี่ยวกับเรา</Link>
        <Link href={"/contact"} className="p-2 hover:text-[#FF3D00]">ติดต่อเรา</Link>
        <Link href={"https://admission.hcu.ac.th/admission.html"} className="bg-[#FF3D00] hover:bg-[#DC3500] p-2 rounded-md">
          สมัครเรียน
        </Link>
      </div>
    </nav>
  );
};
export default avbar;
