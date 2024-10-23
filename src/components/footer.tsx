import { getCategoriesInfo } from "@/lib/get-categories";

export default async function Footer() {
    const categories = await getCategoriesInfo();

    return (
        <footer className="flex flex-col justify-center items-center shadow-lg text-slate-100 bg-[#404242]">
            <ul className="flex flex-row justify-center gap-12 py-10">
                <li className="w-72 [&>h4]:text-4xl [&>h4]:font-semibold [&>h4]:py-2 [&>p]:py-1 [&>p]:text-base [&>p]:leading-6">
                    <h4>SHOPPING APP</h4>
                    <p>
                        16501 Collins Ave, Sunny Isles Beach, FL 33160, United States
                    </p>
                    <p className="duration-150 hover:text-slate-400">
                        <a href="#">
                            info@shopping.app.com
                        </a>
                    </p>
                    <p className="duration-150 hover:text-slate-400">
                        <a href="#">
                            +1 (123) 456-7890
                        </a>
                    </p>
                </li>
                <li className="w-56 [&>h4]:text-4xl [&>h4]:font-semibold [&>h4]:py-2 [&>p]:py-1 [&>p]:text-base [&>p]:leading-6">
                    <h4>CATEGORIES</h4>
                    <p className="duration-150 hover:text-slate-400 hover:scale-110 hover:translate-x-[12px]">
                        <a href="#">
                            {categories[0] && categories[0].title}
                        </a>
                    </p>
                    <p className="duration-150 hover:text-slate-400 hover:scale-110 hover:translate-x-[12px]">
                        <a href="#">
                            {categories[1] && categories[1].title}
                        </a>
                    </p>
                    <p className="duration-150 hover:text-slate-400 hover:scale-110 hover:translate-x-[12px]">
                        <a href="#">
                            {categories[2] && categories[2].title}
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
