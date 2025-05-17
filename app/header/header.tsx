import Image from "next/image";
import omar from "../assets/omar.png";

export default function Header() {
  return (
    <section className="min-h-screen pt-16 flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 rounded-xl overflow-hidden">
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden border border-border">
            <div className="aspect-[3/4] relative">
              <Image
                src={omar || "/placeholder.svg"}
                alt="Omar Sameh"
                fill
                className="object-cover opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              <h1 className="absolute top-6 left-6 text-2xl md:text-3xl font-bold">
                Hi, I am Omar
                <br />a Web Developer
              </h1>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col justify-center p-6 border border-border rounded-xl">
            <div className="space-y-6">
              <p className="text-lg">
                Participated in the ITI ICC open source program, developed web
                applications with Python backend, React frontend, RESTful APIs,
                database design, and collaborated with teams.
              </p>
              <div className="h-px w-full bg-border" />
              <p className="text-lg">
                A Web Developer specialized in MERN stack development. With
                experience in creating and maintaining web applications. I
                create seamless, responsive, and scalable web applications.
                Let's bring your ideas to life!
              </p>
              <div className="h-px w-full bg-border" />
              <p className="text-lg">
                Fresh Computer Science graduate from the Arab Open University,
                where I have gained knowledge and experience in various
                programming languages and technologies. Eager to apply my skills
                in real-world projects and continue learning in a dynamic
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
