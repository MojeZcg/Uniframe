import { Divider } from "@nextui-org/react";
import Link from "next/link";

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="bg-main-dark py-6">
      <div className=" grid max-w-full items-center gap-32 rounded-md px-20 py-24 text-[#333] sm:grid-cols-2">
        <div>
          <h1 className="flex items-center text-6xl font-extrabold text-neutral-50">
            Hablemos <IoCallOutline className=" ml-4 h-14 w-14" />
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            Have some big idea or brand to develop and need help? Then reach out
            we&apos;d love to hear about your project and provide help.
          </p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold text-neutral-50">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-300">
                  <IoMailOutline className="h-6 w-6" />
                </div>
                <a
                  target="blank"
                  href="https://veilmail.io/e/FkKh7o"
                  className="ml-3 text-sm text-slate-400"
                >
                  <small className="block">Mail</small>
                  <strong>https://veilmail.io/e/FkKh7o</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Socials</h2>
            <ul className="mt-3 flex space-x-4">
              <li className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6cf]">
                <Link href="">
                  <FaFacebookF className="h-5 w-5" />
                </Link>
              </li>
              <li className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6cf]">
                <Link href="">
                  <FaLinkedinIn className="h-5 w-5" />
                </Link>
              </li>
              <li className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6cf]">
                <Link href="">
                  <FaInstagram className="h-5 w-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <form className="ml-auo space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md border px-4 py-2.5 text-sm outline-slate-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border px-4 py-2.5 text-sm outline-slate-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md border px-4 py-2.5 text-sm outline-slate-500"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full rounded-md border px-4 pt-2.5 text-sm outline-slate-500"
          ></textarea>
          <button
            type="button"
            className="w-full rounded-md bg-neutral-600 px-4 py-2.5 text-sm font-semibold text-black transition-colors duration-250 ease-in-out hover:bg-slate-200"
          >
            Send
          </button>
        </form>
      </div>
      <div className="py-6 md:hidden">
        <Divider className=" w-full bg-white " />
      </div>
    </div>
  );
}
