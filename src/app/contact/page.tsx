import { contactFields, Socials } from "@/lib/data";
import Link from "next/link";

import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="bg-main-dark px-20 pb-16 pt-16">
      <div className=" grid max-w-full items-start gap-32 rounded-sm text-[#333] sm:grid-cols-2">
        <div className="">
          <h1 className="flex items-center pb-3 text-6xl font-extrabold text-neutral-50">
            Hablemos <IoCallOutline className=" ml-4 h-11 w-11" />
          </h1>
          <p className=" text-sm text-gray-400">
            ¡Nos encantaría saber de ti! ¿Tienes alguna pregunta, sugerencia o
            simplemente quieres charlar sobre arte? No dudes en ponerte en
            contacto con nosotros. Estamos aquí para ayudarte. Envíanos un
            correo electrónico a{" "}
            <Link
              href="mailto:info@uniframe.com"
              target="_blank"
              className="text-blue-400 "
            >
              info@uniframe.com
            </Link>{" "}
            o llámanos al{" "}
            <Link
              href="tel:+542614995742"
              target="_blank"
              className="text-blue-400 "
            >
              +542614995742
            </Link>
            . También puedes visitarnos en nuestra sucursal en{" "}
            <Link
              href="https://maps.app.goo.gl/dntF5pP86fQCLB998"
              target="_blank"
              className="text-blue-400 "
            >
              San Martin 644, Lujan de Cuyo, Mendoza
            </Link>
            .
          </p>
          <span className="text-base text-neutral-200">
            ¡Esperamos verte pronto!
          </span>
          <div className="pt-3">
            <h2 className="pb-3 text-2xl font-extrabold text-neutral-200">
              Email
            </h2>
            <ul className="pb-6">
              <li className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                  <IoMailOutline className="h-8 w-8 text-black" />
                </div>
                <Link
                  target="_blank"
                  href="mailto:contact@uniframe.com"
                  className="pl-4"
                >
                  <strong className=" text-xl text-white">
                    contact@uniframe.com
                  </strong>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="pb-3 text-2xl font-extrabold text-neutral-200">
              Nuestras Redes
            </h2>
            <ul className="flex space-x-5">
              {Socials.map((social) => (
                <li
                  key={social.id}
                  aria-label={social.name}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white"
                >
                  <Link target="_blank" href={social.link}>
                    <social.icon className="h-7 w-7 text-black" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form className="ml-auto w-full space-y-8">
          <div className="space-y-5">
            {contactFields.map((field) => (
              <Input
                required
                key={field.id}
                type={field.type}
                placeholder={field.place}
                className=" h-12 w-full rounded-lg border border-neutral-500  bg-neutral-900 text-base text-white"
              ></Input>
            ))}

            <Textarea
              required
              placeholder="Escribe tu mensaje aquí"
              className="min-h-52 w-full rounded-lg border border-neutral-500 bg-neutral-900 text-base text-white"
            />
          </div>

          <Button
            type="submit"
            variant="outline"
            className="duration-250 h-12 w-full rounded-lg border border-neutral-300 bg-neutral-900 text-base font-semibold text-white transition-colors ease-in-out"
          >
            Enviar
            <IoIosSend className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
