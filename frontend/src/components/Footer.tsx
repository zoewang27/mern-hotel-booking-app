const Footer = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl text-white font-bold tracking-tight">
          EsayToRent.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
      <div>
      <p className="text-sm text-white flex items-center justify-center">Copyright © 2024 EsayToRent.com™. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
