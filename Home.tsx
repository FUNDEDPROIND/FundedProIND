import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, CheckCircle, ShieldCheck, DollarSign, Quote, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      <header className="bg-[#002244] text-white p-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">FundedProInd</h1>
          <p className="text-sm mt-1">Empowering Traders Across India</p>
        </div>
        <div className="space-x-4">
          <Button className="bg-white text-[#002244] hover:bg-gray-200">Login</Button>
          <Button className="bg-white text-[#002244] hover:bg-gray-200">Sign Up</Button>
        </div>
      </header>

      <section className="text-center py-16 px-4 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">Get Funded to Trade</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join India's most transparent and trader-friendly prop firm. We provide you the capital. You trade, we split the profits.
        </p>
        <Button className="text-white bg-blue-600 hover:bg-blue-700 text-lg px-6 py-3">Get Started</Button>
      </section>

      {/* Other sections would be included here */}

      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} FundedProInd. All rights reserved.</p>
      </footer>
    </div>
  );
}
