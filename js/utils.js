(function () {
  const properties = [
    {
      id: 'p-1001',
      title: 'Private Room in Gwarinpa',
      location: 'Gwarinpa, Abuja',
      city: 'Abuja',
      state: 'FCT',
      price: 180000,
      period: 'month',
      propertyType: 'Apartment',
      accommodationType: 'Room',
      availability: 'Available now',
      capacity: 2,
      rooms: 2,
      beds: 1,
      furnished: true,
      verified: true,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
      ],
      amenities: ['Wi-Fi','Electricity','Water','Security','Kitchen','Laundry'],
      description: 'Comfortable room in a secured apartment ideal for students and young professionals. Walking distance to shops and public transport.',
      host: {
        name: 'Aisha Bello',
        role: 'Verified host',
        since: '2022',
        responseRate: '96%',
        responseTime: 'Within 1 hour',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80'
      },
      rules: ['No smoking indoors','Quiet hours 10pm-7am','Visitors by prior notice'],
      featured: true,
      views: 402,
      category: 'student'
    },
    {
      id: 'p-1002',
      title: 'Studio Apartment near Yaba',
      location: 'Yaba, Lagos',
      city: 'Lagos',
      state: 'Lagos',
      price: 260000,
      period: 'month',
      propertyType: 'Studio',
      accommodationType: 'Apartment',
      availability: 'Available in 2 weeks',
      capacity: 1,
      rooms: 1,
      beds: 1,
      furnished: true,
      verified: true,
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
      ],
      amenities: ['Wi-Fi','Workspace','Security','Water','Generator'],
      description: 'Clean modern studio for low- to medium-term stays with easy access to schools, offices, and transport.',
      host: {
        name: 'Temitope Ojo',
        role: 'Verified host',
        since: '2021',
        responseRate: '98%',
        responseTime: 'Within 30 mins',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      },
      rules: ['No smoking','Pets not allowed','Check-in after 8am'],
      featured: true,
      views: 511,
      category: 'professional'
    },
    {
      id: 'p-1003',
      title: 'Shared Apartment for Interns',
      location: 'Kano City, Kano',
      city: 'Kano',
      state: 'Kano',
      price: 120000,
      period: 'month',
      propertyType: 'Shared Apartment',
      accommodationType: 'Shared Room',
      availability: 'Available now',
      capacity: 4,
      rooms: 3,
      beds: 4,
      furnished: true,
      verified: true,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
      ],
      amenities: ['Wi-Fi','Parking','Generator','Water','Security'],
      description: 'Budget-friendly shared apartment for interns, students, and young professionals. Great for community living.',
      host: {
        name: 'Mariam Yusuf',
        role: 'Host',
        since: '2023',
        responseRate: '92%',
        responseTime: 'Within 2 hours',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80'
      },
      rules: ['Quiet hours 10pm','Visitors after 4pm','Share kitchen responsibilities'],
      featured: true,
      views: 335,
      category: 'intern'
    },
    {
      id: 'p-1004',
      title: '2-Bedroom Flat in Kaduna',
      location: 'Kaduna North, Kaduna',
      city: 'Kaduna',
      state: 'Kaduna',
      price: 310000,
      period: 'month',
      propertyType: 'Apartment',
      accommodationType: 'Whole Place',
      availability: 'Available now',
      capacity: 4,
      rooms: 2,
      beds: 2,
      furnished: false,
      verified: true,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
      ],
      amenities: ['Wi-Fi','Parking','Security','Water','Kitchen','Laundry'],
      description: 'Spacious apartment for professionals or small families needing a comfortable and secure stay in Kaduna.',
      host: {
        name: 'Umar Sani',
        role: 'Verified host',
        since: '2020',
        responseRate: '95%',
        responseTime: 'Within 1 hour',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
      },
      rules: ['Pets not allowed','No overnight guests without notice','Quiet after 11pm'],
      featured: false,
      views: 241,
      category: 'professional'
    },
    {
      id: 'p-1005',
      title: 'Verified Room Close to UNILAG',
      location: 'Akoka, Lagos',
      city: 'Lagos',
      state: 'Lagos',
      price: 220000,
      period: 'month',
      propertyType: 'Duplex',
      accommodationType: 'Room',
      availability: 'Available now',
      capacity: 2,
      rooms: 2,
      beds: 1,
      furnished: true,
      verified: true,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
      ],
      amenities: ['Wi-Fi','Electricity','Water','Security','Parking'],
      description: 'A clean, secure room for students and early-career professionals near major educational and commercial hubs.',
      host: {
        name: 'Joy Ibe',
        role: 'Host',
        since: '2022',
        responseRate: '94%',
        responseTime: 'Within 2 hours',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80'
      },
      rules: ['No parties','Quiet hours','Use of kitchen shared'],
      featured: false,
      views: 287,
      category: 'student'
    },
    {
      id: 'p-1006',
      title: 'Executive Studio in Lekki',
      location: 'Lekki Phase 1, Lagos',
      city: 'Lagos',
      state: 'Lagos',
      price: 480000,
      period: 'month',
      propertyType: 'Studio',
      accommodationType: 'Apartment',
      availability: 'Available in 1 week',
      capacity: 2,
      rooms: 1,
      beds: 1,
      furnished: true,
      verified: true,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
      ],
      amenities: ['Wi-Fi','Workspace','Gym','Parking','Security','Water'],
      description: 'A premium studio apartment setup for professionals looking for comfort and convenience in a central location.',
      host: {
        name: 'Damilola Ade',
        role: 'Verified host',
        since: '2019',
        responseRate: '99%',
        responseTime: 'Within 30 minutes',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      },
      rules: ['No smoking','No pets','Visitors by prior notice'],
      featured: false,
      views: 602,
      category: 'professional'
    }
  ];

  const locations = [
    { name: 'Katsina', city: 'Katsina', image:'🏙️' },
    { name: 'Abuja', city:'Abuja', image:'🏛️' },
    { name: 'Lagos', city:'Lagos', image:'🌊' },
    { name: 'Kano', city:'Kano', image:'🏞️' },
    { name: 'Kaduna', city:'Kaduna', image:'🌄' }
  ];

  const testimonials = [
    { name: 'Amina K.', text:'I found a verified room within a few days and the process felt transparent from start to finish.', type:'Student' },
    { name: 'Samuel E.', text:'The search filters made it easy to find affordable accommodation near my internship location.', type:'Intern' },
    { name: 'Mary A.', text:'As a host, I got serious inquiries and the listing process was straightforward and professional.', type:'Host' },
    { name: 'Tariq B.', text:'It feels trustworthy and modern, which is exactly what I needed during my NYSC placement.', type:'Corps member' }
  ];

  const users = [
    { id: 'u-1', name:'Ada Okafor', role:'Guest', email:'ada@example.com', phone:'+2348070001111' },
    { id: 'u-2', name:'Emeka David', role:'Host', email:'emeka@example.com', phone:'+2348031112222' },
    { id:'u-3', name:'Sadeeq Karfi', role:'Admin', email:'admin@copartment.ng', phone:'+2348090003333' }
  ];

  const messages = [
    {
      id:'m-1',
      participant:'Aisha Bello',
      preview:'Thanks for your message. The room is still available.',
      unread: 1,
      timestamp: '2m ago',
      thread: [
        { sender:'guest', text:'Hi, is the room still available for next month?', time:'9:12 AM' },
        { sender:'host', text:'Yes, it is still available and verified.', time:'9:18 AM' },
        { sender:'guest', text:'Great. Can I see more details about the monthly pricing?', time:'9:19 AM' }
      ]
    },
    {
      id:'m-2',
      participant:'Temitope Ojo',
      preview:'The studio is furnished and ready for move-in.',
      unread: 0,
      timestamp: '1h ago',
      thread: [
        { sender:'host', text:'The studio is furnished and ready for move-in.', time:'8:30 AM' },
        { sender:'guest', text:'Nice. I will send my move-in date soon.', time:'8:32 AM' }
      ]
    }
  ];

  const notifications = [
    { id:'n-1', title:'New accommodation request', detail:'You received a request for Gwarinpa room', read:false, time:'10 mins ago' },
    { id:'n-2', title:'Request accepted', detail:'Your request for Yaba studio was accepted', read:false, time:'1 hour ago' },
    { id:'n-3', title:'Property approved', detail:'Your listing in Kaduna was approved', read:true, time:'Yesterday' }
  ];

  const defaultState = {
    properties,
    locations,
    testimonials,
    users,
    messages,
    notifications,
    bookings: [
      { id:'b-1', propertyId:'p-1001', guest:'Ada Okafor', status:'Pending', date:'2026-10-10', duration:'6 months', price:180000 },
      { id:'b-2', propertyId:'p-1002', guest:'Samuel E.', status:'Accepted', date:'2026-11-02', duration:'4 months', price:260000 }
    ],
    saved: ['p-1002', 'p-1006']
  };

  const CopartmentData = defaultState;
  window.CopartmentData = CopartmentData;
})();
