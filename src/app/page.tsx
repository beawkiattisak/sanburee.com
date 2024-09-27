import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-terminus">
      <Navbar />
      <div className="px-6 sm:px-10 pt-6">
        <span className="text-[48px] sm:text-[62px] tracking-tight leading-tight mb-1">
          Hello!<br />
        </span>
        <span className="text-[44px] sm:text-[56px] tracking-tight leading-tight">
          Kiattisak Sanburee<br />
        </span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">
          competitive programming and mathematics lover.<br />
          Currently studying at Assumption College Rayong in the Engineering Program.<br />
        </span>
        <div className="pt-4">
          <a href="https://github.com/beawkiattisak" target="_blank" rel="noopener noreferrer" className="text-[20px] sm:text-[22px] text-[#285577] mr-4 underline">
            github
          </a>
          <a href="https://www.facebook.com/kiattisakbeawsanburee/" target="_blank" rel="noopener noreferrer" className="text-[20px] sm:text-[22px] underline text-[#285577] mr-4">
            facebook
          </a>
          <a href="https://www.instagram.com/kiatiss/" target="_blank" rel="noopener noreferrer" className="text-[20px] sm:text-[22px] text-[#285577] mr-4 underline">
            instagram
          </a>
          <a href="https://codeforces.com/profile/beawkiattisak" target="_blank" rel="noopener noreferrer" className="text-[20px] sm:text-[22px] text-[#285577] underline">
            codeforces
          </a>
        </div>
        <hr className="h-px my-8 bg-gray-300 border-0" />
        <span className="text-[44px] sm:text-[56px] tracking-tight leading-tight">
          My setup<br />
        </span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">
          Hardware <br/>
          PC Specs: Ryzen 5 3600, 16GB RAM, GTX 1050 Ti, 1TB Storage.<br />
          Laptop: Macbook Pro 2020 (Intel), Lenovo Thinkpad X395<br/><br />
        </span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">
          Software <br/>
          OS: I use arch linux with i3wm, MacOS and Windows 11.<br />
          Editor: I use Visual Studio Code and NVIM.
        </span>
        <hr className="h-px my-8 bg-gray-300 border-0" />

        <span className="text-[44px] sm:text-[56px] tracking-tight leading-tight">
          Activities & Awards<br />
        </span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">Depa Coding War (Eastern region) <span className="text-[#5F676A]">(1st Place)</span><br/></span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">Depa Coding War (Final Round) <span className="text-[#5F676A]">(3rd Place)</span><br/></span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">Thailand Cyber Top Talent 2023 <span className="text-[#5F676A]">(8th Place)</span><br/></span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">5th Kibo Robot Programming Challenge <span className="text-[#5F676A]">(12th Place)</span><br/></span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">Assumption College Rayong Online voting system <a href="https://vote.sanburee.com/voting2024" className="text-[#285577] underline">link<br/></a></span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">Student Council (Digital Leader) <span className="text-[#5F676A]">(2023-2024)</span><br/></span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">Digital Leader of Jakkrawan Student Party <span className="text-[#5F676A]">(770 votes)</span><br/></span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">Young iOS Developer Camp <span className="text-[#5F676A]">(2022)</span><br/></span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">BrailleGuess (Swift Student Challenge 2023) <span className="text-[#5F676A]">(Reject)</span><br/></span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">Binary101 (Swift Student Challenge Submission 2024) <span className="text-[#5F676A]">(Reject)</span><br/></span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">SGxACR Authentic Leader Camp <span className="text-[#5F676A]">(2024)</span><br/></span>
        <span className="text-[20px] sm:text-[22px] tracking-tight leading-tight">9th KMITL Math Camp <span className="text-[#5F676A]">(2024)</span><br/></span>
        <hr className="h-px my-8 bg-gray-300 border-0" />
        <span className="pb-10">© 2024 Kiattisak Sanburee. All rights reserved.</span>
      </div>
    </div>
  );
}
