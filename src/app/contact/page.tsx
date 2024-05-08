import { Socials } from "@/lib/data";
import { Button, Divider, Input, Textarea } from "@nextui-org/react";
import Link from "next/link";

import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

export default function Home() {
  const fields = [
    {
      id: 1,
      label: "Nombre Completo",
      place: "Maria Ana González",
      type: "text",
      isrequired: true,
    },
    {
      id: 2,
      label: "Correo Electronico",
      place: "contacto@example.com",
      type: "email",
      isrequired: true,
    },
  ];

  return (
    <div className="bg-main-dark">
      <div className=" grid max-w-full items-center gap-32 rounded-sm px-20 py-16 text-[#333] sm:grid-cols-2">
        <div>
          <h1 className="flex items-center text-6xl font-extrabold text-neutral-50">
            Hablemos <IoCallOutline className=" ml-4 h-14 w-14" />
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            ¡Nos encantaría saber de ti! ¿Tienes alguna pregunta, sugerencia o
            simplemente quieres charlar sobre arte? No dudes en ponerte en
            contacto con nosotros. Estamos aquí para ayudarte. Envíanos un
            correo electrónico a{" "}
            <Link href="mailto:info@uniframe.com" className="text-blue-400 ">
              info@uniframe.com
            </Link>{" "}
            o llámanos al{" "}
            <Link href="tel:+542614995742" className="text-blue-400 ">
              +542614995742
            </Link>
            . También puedes visitarnos en nuestra sucursal en [dirección],
            ¡Esperamos verte pronto!
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-extrabold text-neutral-50">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-neutral-200">
                  <IoMailOutline className="h-10 w-10 text-black" />
                </div>
                <Link
                  target="_blank"
                  href="mailto:Uniframe@gmail.com"
                  className="pl-3"
                >
                  <strong className=" text-base text-white">
                    Nuestro Email
                    <br />
                    Uniframe@gmail.com
                  </strong>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-extrabold text-neutral-50">Socials</h2>
            <ul className="mt-3 flex space-x-4">
              {Socials.map((social) => (
                <li
                  key={social.id}
                  aria-label={social.name}
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-neutral-200"
                >
                  <Link target="_blank" href={social.link}>
                    <social.icon className="h-8 w-8 text-black" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form className="ml-auto w-full space-y-6">
          <div className="space-y-4">
            {fields.map((field) => (
              <Input
                isRequired
                key={field.id}
                type={field.type}
                size="lg"
                color="primary"
                label={field.label}
                variant="bordered"
                placeholder={field.place}
                classNames={{
                  label: ["text-[1.1rem]", ""],
                  input: ["text-base"],
                }}
                className=" w-full  text-lg text-white "
              />
            ))}

            <Textarea
              isRequired
              color="primary"
              label="Mensaje"
              variant="bordered"
              placeholder="Escribe tu mensaje aquí"
              classNames={{
                label: ["text-[1.1rem]"],
                input: "resize-y min-h-[7rem]",
              }}
              className="w-full text-lg text-white"
            />
          </div>

          <Button
            type="submit"
            variant="bordered"
            color="primary"
            className="h-12 w-full text-lg font-semibold text-white transition-colors duration-250 ease-in-out"
          >
            Enviar
            <IoIosSend className="h-5 w-5" />
          </Button>
        </form>
      </div>
      <div className=" z-50 px-6 py-4">
        <Divider className=" h-0.5 bg-white" />
      </div>
    </div>
  );
}
