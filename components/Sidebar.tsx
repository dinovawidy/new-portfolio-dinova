import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-[#063d3d] text-white flex flex-col justify-between p-6"> 
      <div> 
        <div className="flex items-center gap-3 mb-8"> 
          <div className="w-10 h-10 rounded-md bg-[#12bfae] flex items-center justify-center font-bold text-white">DW</div> 
          <div> 
            <div className="font-semibold">Dinova Widya</div> 
            <div className="text-xs text-slate-200/70">Frontend Developer</div> 
          </div> 
        </div> 

        <nav className="space-y-2"> 
          <a href="#home" className="block px-3 py-2 rounded-lg bg-[#0a5150]">Home</a> 
          <a href="#about" className="block px-3 py-2 rounded-lg hover:bg-[#0a5150]">About</a> 
          <a href="#projects" className="block px-3 py-2 rounded-lg hover:bg-[#0a5150]">Projects</a> 
          <a href="#experience" className="block px-3 py-2 rounded-lg hover:bg-[#0a5150]">Experience</a> 
          <a href="#contact" className="block px-3 py-2 rounded-lg hover:bg-[#0a5150]">Contact</a>
        </nav>
      </div>

      <div className="mt-6"> 
        <div className="bg-[#0b3b3b] rounded-xl p-4"> 
          <h4 className="text-sm font-semibold">Available for hire</h4> 
          <p className="text-xs text-slate-200/80 mt-2">Open to freelance & contract work.</p> 
          <a href="#contact" className="mt-3 inline-block w-full text-center bg-[#12bfae] text-[#003738] py-2 rounded-md font-medium">Get in touch</a>
        </div>
      </div>
    </aside>
  );
}