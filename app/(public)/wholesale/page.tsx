'use client';
import { useState } from 'react';

export default function WholesalePage() {
  const [ok, setOk] = useState(false);
  return <div className="container-pad py-12"><div className="bg-berryGrey rounded-2xl p-10 mb-8"><h1 className="h2">Become a partner.</h1><p>Wholesale partners have exclusive perks.</p></div>
  {ok ? <p className="card p-4">Thanks. We received your distributor form.</p> : <form className="grid gap-3 max-w-2xl" onSubmit={async(e)=>{e.preventDefault(); const form = new FormData(e.currentTarget); await fetch('/api/wholesale',{method:'POST',body: JSON.stringify(Object.fromEntries(form))}); setOk(true);}}>
  <h2 className="font-heading">Account information</h2><input required name="accountName" placeholder="Name" className="border rounded-xl px-3 py-2"/><input required name="accountEmail" placeholder="E-mail" className="border rounded-xl px-3 py-2"/>
  <h2 className="font-heading">Company information</h2><input required name="companyName" placeholder="Company" className="border rounded-xl px-3 py-2"/><input name="taxId" placeholder="Tax ID" className="border rounded-xl px-3 py-2"/>
  <h2 className="font-heading">Shipping address</h2><textarea required name="shippingAddress" className="border rounded-xl px-3 py-2"/>
  <label><input type="checkbox" required name="agreedToTerms"/> I agree to terms.</label><button className="bg-ink text-paper rounded-xl py-2">Submit</button></form>}</div>;
}
