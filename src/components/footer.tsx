import Link from "next/link";

export default async function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center shadow-lg text-slate-100 bg-[#404242]">
            <ul className="flex flex-row justify-center gap-12 py-10">
                <li className="w-72 [&>h4]:text-4xl [&>h4]:font-semibold [&>h4]:py-2 [&>p]:py-1 [&>p]:text-base [&>p]:leading-6">
                    <h4>SHOPPING APP</h4>
                    <p>
                        16501 Collins Ave, Sunny Isles Beach, FL 33160, United States
                    </p>
                    <p className="duration-150 hover:text-slate-400">
                        <Link href={"#"}>
                            info@shopping.app.com
                        </Link>
                    </p>
                    <p className="duration-150 hover:text-slate-400">
                        <Link href={"#"}>
                            +1 (123) 456-7890
                        </Link>
                    </p>
                </li>
                <li className="w-56 [&>h4]:text-4xl [&>h4]:font-semibold [&>h4]:py-2 [&>p]:py-1 [&>p]:text-base [&>p]:leading-6">
                    <h4>SECTIONS</h4>
                    <p className="duration-150 hover:text-slate-400 hover:scale-110 hover:translate-x-[12px]">
                        <a href="/">
                            Home
                        </a>
                    </p>
                    <p className="duration-150 hover:text-slate-400 hover:scale-110 hover:translate-x-[12px]">
                        <a href="/categories">
                            Categories
                        </a>
                    </p>
                    <p className="duration-150 hover:text-slate-400 hover:scale-110 hover:translate-x-[12px]">
                        <a href="#">
                            More
                        </a>
                    </p>
                </li>
                <li className="w-56 [&>h4]:text-4xl [&>h4]:font-semibold [&>h4]:py-2 [&>p]:py-1 [&>p]:text-base [&>p]:leading-6">
                    <h4>CONTACT</h4>
                    <p className="duration-150 hover:text-slate-400 hover:scale-110 hover:translate-x-[12px]">
                        <a href="#">
                            Contact Us
                        </a>
                    </p>
                    <p className="duration-150 hover:text-slate-400 hover:scale-110 hover:translate-x-[12px]">
                        <a href="#">
                            FAQ's
                        </a>
                    </p>
                </li>
            </ul>
            <div className="w-[90%] h-[0.125rem] bg-slate-100" />
            <h5 className="py-8 font-medium">Copyright &copy; 2024 Shopping App | All Rights Reserved.</h5>
        </footer>
    );
};
