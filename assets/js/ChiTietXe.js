const motorbikes = [
    {
      id: 1,
      name: "Honda BLADE 110cc",
      price: "20,000,000 VND",
      img: "assets/img/blade-dac-biet-den-550x400.png",
      details: {
        weight: "114 kg",
        dimensions: "1.844mm x 714mm x 1.132mm",
        wheelbase: "1.273 mm",
        seatHeight: "760 mm",
        groundClearance: "140 mm",
        fuelCapacity: "6,0 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 2,
      name: "SUPER CUB C125",
      price: "18,000,000 VND",
      img: "assets/img/Remove-bg.ai_1728552348890.png",
      details: {
        weight: "115 kg",
        dimensions: "1.850mm x 720mm x 1.140mm",
        wheelbase: "1.280 mm",
        seatHeight: "765 mm",
        groundClearance: "145 mm",
        fuelCapacity: "6,5 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 3,
      name: "Honda Future 125 FI 2024",
      price: "30,000,000 VND",
      img: "assets/img/honda-future-fi-2024-1-1-550x400.jpg",
      details: {
        weight: "113 kg",
        dimensions: "1.830mm x 710mm x 1.120mm",
        wheelbase: "1.270 mm",
        seatHeight: "755 mm",
        groundClearance: "138 mm",
        fuelCapacity: "5,8 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 4,
      name: "Wave ALPHA 110cc",
      price: "24,000,000 VND",
      img: "assets/img/EeWQ1bnqOSv0jgrFImMr-550x400.jpg",
      details: {
        weight: "116 kg",
        dimensions: "1.860mm x 725mm x 1.145mm",
        wheelbase: "1.285 mm",
        seatHeight: "770 mm",
        groundClearance: "142 mm",
        fuelCapacity: "6,3 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 5,
      name: "Wave RSX FI 110cc",
      price: "26,000,000 VND",
      img: "assets/img/RSX-vanh-duc-phanh-dia-trang-den.png",
      details: {
        weight: "114 kg",
        dimensions: "1.844mm x 714mm x 1.132mm",
        wheelbase: "1.273 mm",
        seatHeight: "760 mm",
        groundClearance: "140 mm",
        fuelCapacity: "6,0 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 6,
      name: "Wave RSX 2024",
      price: "28,000,000 VND",
      img: "assets/img/NcnkClK5XhDj3GpnmKW6-550x400.png",
      details: {
        weight: "112 kg",
        dimensions: "1.820mm x 705mm x 1.115mm",
        wheelbase: "1.265 mm",
        seatHeight: "750 mm",
        groundClearance: "137 mm",
        fuelCapacity: "5,9 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 7,
      name: "Wave Alpha Bản Cổ Điển",
      price: "19,000,000 VND",
      img: "assets/img/wave-alpha-phien-ban-co-dien-1s.png",
      details: {
        weight: "117 kg",
        dimensions: "1.870mm x 730mm x 1.150mm",
        wheelbase: "1.290 mm",
        seatHeight: "775 mm",
        groundClearance: "143 mm",
        fuelCapacity: "6,6 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 8,
      name: "Air Blade 125/160 (2025)",
      price: "42,000,000 VND",
      img: "assets/img/AB125-TheThao-XamDoDen.jpg",
      details: {
        weight: "118 kg",
        dimensions: "1.875mm x 735mm x 1.155mm",
        wheelbase: "1.295 mm",
        seatHeight: "780 mm",
        groundClearance: "144 mm",
        fuelCapacity: "6,7 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 9,
      name: "Air Blade 125cc",
      price: "40,000,000 VND",
      img: "assets/img/20220524-air-blade-125-chi-tiet-xe-tieu-chuan-xanh-den.png",
      details: {
        weight: "111 kg",
        dimensions: "1.815mm x 700mm x 1.110mm",
        wheelbase: "1.260 mm",
        seatHeight: "745 mm",
        groundClearance: "136 mm",
        fuelCapacity: "5,7 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 10,
      name: "Air Blade 160cc",
      price: "44,000,000 VND",
      img: "assets/img/ab.png",
      details: {
        weight: "114 kg",
        dimensions: "1.845mm x 715mm x 1.135mm",
        wheelbase: "1.275 mm",
        seatHeight: "765 mm",
        groundClearance: "141 mm",
        fuelCapacity: "6,1 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 11,
      name: "Honda LEAD 125cc 2025",
      price: "40,000,000 VND",
      img: "assets/img/honda-lead-125cc-2025-1-550x400.jpg",
      details: {
        weight: "119 kg",
        dimensions: "1.880mm x 740mm x 1.160mm",
        wheelbase: "1.300 mm",
        seatHeight: "785 mm",
        groundClearance: "146 mm",
        fuelCapacity: "6,8 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 12,
      name: "Honda LEAD ABS",
      price: "45,000,000 VND",
      img: "assets/img/xanh-550x400.png",
      details: {
        weight: "113 kg",
        dimensions: "1.840mm x 712mm x 1.130mm",
        wheelbase: "1.272 mm",
        seatHeight: "758 mm",
        groundClearance: "139 mm",
        fuelCapacity: "5,9 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 13,
      name: "Honda SH125i",
      price: "79,000,000 VND",
      img: "assets/img/sh125i-xam-den-removebg-preview.png",
      details: {
        weight: "115 kg",
        dimensions: "1.850mm x 718mm x 1.138mm",
        wheelbase: "1.276 mm",
        seatHeight: "762 mm",
        groundClearance: "140 mm",
        fuelCapacity: "6,2 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 14,
      name: "Honda SH160i",
      price: "99,000,000 VND",
      img: "assets/img/sh160.png",
      details: {
        weight: "120 kg",
        dimensions: "1.885mm x 745mm x 1.165mm",
        wheelbase: "1.305 mm",
        seatHeight: "790 mm",
        groundClearance: "147 mm",
        fuelCapacity: "6,9 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 15,
      name: "Honda VISION",
      price: "32,000,000 VND",
      img: "assets/img/vision-550x400.jpg",
      details: {
        weight: "110 kg",
        dimensions: "1.810mm x 695mm x 1.105mm",
        wheelbase: "1.255 mm",
        seatHeight: "740 mm",
        groundClearance: "135 mm",
        fuelCapacity: "5,6 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
    {
      id: 16,
      name: "Sh Mode 125cc",
      price: "58,000,000 VND",
      img: "assets/img/gf8B4s14htSXebW5PrFy-1-550x400.png",
      details: {
        weight: "117 kg",
        dimensions: "1.865mm x 727mm x 1.147mm",
        wheelbase: "1.287 mm",
        seatHeight: "772 mm",
        groundClearance: "142 mm",
        fuelCapacity: "6,4 lít",
        frontSuspension: "Ống lồng",
        rearSuspension: "Lò xo trụ",
        engineType: "Xăng, 4 kỳ, 1 xi-lanh, làm mát bằng chất lỏng"
      }
    },
  ];
