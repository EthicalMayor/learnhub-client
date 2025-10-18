import professional_profile from "@/app/assets/images/professional_profile.png"
import project from "@/app/assets/images/project.png"
import event from "@/app/assets/images/event.png"
import success from "@/app/assets/images/success.png"
import Image from "next/image"
import Link from "next/link"

export default function UnlockYourPotential() {
  return (
    <section className="py-16 px-5 md:px-10 lg:px-20 bg-white text-gray-900">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          Unlock Your Potential with LearnHub
        </h2>
        <p className="text-sm md:text-lg text-gray-600">
          LearnHub offers solutions designed to help you succeed in your
          academic, social, and professional journey.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {/* Card 1 */}
        <div className="flex items-center gap-4 bg-[#E3EFFE] hover:shadow-lg transition-all rounded-2xl p-5 md:p-7">
          <Image
            src={professional_profile}
            alt="professional_profile"
            className="h-20 w-auto"
          />
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-1">
              Build Your Professional Profile
            </h3>
            <p className="text-xs md:text-sm text-gray-700">
              Showcase your skills, projects, and achievements to attract
              collaborators and potential employers.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-4 bg-[#FFF4E2] hover:shadow-lg transition-all rounded-2xl p-5 md:p-7">
          <Image src={project} alt="project" className="h-20 w-auto" />
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-1">
              Collaborate on Projects
            </h3>
            <p className="text-xs md:text-sm text-gray-700">
              Find and connect with students who share your interests and work
              together on innovative ideas.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center gap-4 bg-[#FBEAFF] hover:shadow-lg transition-all rounded-2xl p-5 md:p-7">
          <Image src={event} alt="event" className="h-20 w-auto" />
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-1">
              Attend Networking Events
            </h3>
            <p className="text-xs md:text-sm text-gray-700">
              Discover and participate in events that connect you with industry
              professionals and fellow students.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center gap-4 bg-[#E3FFDB] hover:shadow-lg transition-all rounded-2xl p-5 md:p-7">
          <Image src={success} alt="success" className="h-20 w-auto" />
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-1">
              Share Your Success
            </h3>
            <p className="text-xs md:text-sm text-gray-700">
              Inspire others by sharing your accomplishments and learning from
              your peers’ experiences.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-xl md:text-3xl font-bold mb-2">
          Ready to connect, learn, and grow?
        </h3>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Hundreds of students have already taken the leap.
        </p>
        <Link
          href="/signup"
          className="inline-block px-10 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-sm md:text-base font-medium transition-all"
        >
          Join them
        </Link>
      </div>
    </section>
  )
}
