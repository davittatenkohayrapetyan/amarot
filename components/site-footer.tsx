export function SiteFooter() {
  return (
    <footer className="bg-berryGrey mt-20 py-12">
      <div className="container-pad grid md:grid-cols-3 gap-8 text-sm">
        <div><h3 className="font-heading mb-3">Newsletter</h3><form className="flex gap-2"><input className="px-3 py-2 rounded-xl w-full" placeholder="E-mail"/><button className="bg-ink text-paper px-4 rounded-xl">Join</button></form></div>
        <div className="space-y-1"><p>FAQ</p><p>About</p><p>Privacy Policy</p><p>Shipping Policy</p><p>Refund Policy</p><p>Legal Notice</p><p>Terms of Service</p></div>
        <div><p>eat.amarot@gmail.com</p><p>+374 41 906 212</p><p>Mon-Fri, 9:00am to 6:30pm</p></div>
      </div>
    </footer>
  );
}
