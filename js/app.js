(function () {
  const STORAGE_KEYS = {
    currentUser: 'copartment_current_user',
    users: 'copartment_users',
    properties: 'copartment_properties',
    bookings: 'copartment_bookings',
    saved: 'copartment_saved',
    notifications: 'copartment_notifications',
    messages: 'copartment_messages'
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(value || 0);
  };

  const getValue = (key, fallback) => {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    try { return JSON.parse(raw); } catch (error) { return fallback; }
  };

  const setValue = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const loadSeedData = () => {
    if (!localStorage.getItem(STORAGE_KEYS.properties)) {
      setValue(STORAGE_KEYS.properties, window.CopartmentData.properties);
    }
    if (!localStorage.getItem(STORAGE_KEYS.bookings)) {
      setValue(STORAGE_KEYS.bookings, window.CopartmentData.bookings);
    }
    if (!localStorage.getItem(STORAGE_KEYS.notifications)) {
      setValue(STORAGE_KEYS.notifications, window.CopartmentData.notifications);
    }
    if (!localStorage.getItem(STORAGE_KEYS.messages)) {
      setValue(STORAGE_KEYS.messages, window.CopartmentData.messages);
    }
    if (!localStorage.getItem(STORAGE_KEYS.saved)) {
      setValue(STORAGE_KEYS.saved, window.CopartmentData.saved);
    }
    if (!localStorage.getItem(STORAGE_KEYS.users)) {
      setValue(STORAGE_KEYS.users, window.CopartmentData.users);
    }
  };

  const getProperties = () => {
    loadSeedData();
    return getValue(STORAGE_KEYS.properties, window.CopartmentData.properties);
  };

  const getPropertyById = (id) => {
    return getProperties().find((property) => property.id === id) || null;
  };

  const saveProperty = (propertyId) => {
    const saved = getSavedProperties();
    if (saved.includes(propertyId)) {
      const filtered = saved.filter((id) => id !== propertyId);
      setValue(STORAGE_KEYS.saved, filtered);
      return false;
    }
    saved.push(propertyId);
    setValue(STORAGE_KEYS.saved, saved);
    return true;
  };

  const getSavedProperties = () => {
    return getValue(STORAGE_KEYS.saved, []);
  };

  const createBooking = (payload) => {
    const bookings = getValue(STORAGE_KEYS.bookings, []);
    const newBooking = {
      id: `b-${Date.now()}`,
      ...payload,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    bookings.unshift(newBooking);
    setValue(STORAGE_KEYS.bookings, bookings);
    return newBooking;
  };

  const getBookings = () => {
    return getValue(STORAGE_KEYS.bookings, []);
  };

  const createProperty = (payload) => {
    const properties = getProperties();
    const newProperty = {
      ...payload,
      id: `p-${Date.now()}`,
      verified: false,
      availability: 'Pending approval',
      status: 'Pending Review',
      views: 0,
      featured: false,
      images: payload.images || [payload.image || 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80']
    };
    properties.unshift(newProperty);
    setValue(STORAGE_KEYS.properties, properties);
    return newProperty;
  };

  const getNotifications = () => {
    return getValue(STORAGE_KEYS.notifications, []);
  };

  const markNotificationRead = (notificationId) => {
    const notifications = getNotifications().map((n) => {
      if (n.id === notificationId) return { ...n, read: true };
      return n;
    });
    setValue(STORAGE_KEYS.notifications, notifications);
  };

  const getMessages = () => {
    return getValue(STORAGE_KEYS.messages, []);
  };

  const sendMessage = (conversationId, text) => {
    const conversations = getMessages();
    const updated = conversations.map((conversation) => {
      if (conversation.id !== conversationId) return conversation;
      const nextThread = [...conversation.thread, { sender: 'guest', text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }];
      return { ...conversation, preview: text, thread: nextThread };
    });
    setValue(STORAGE_KEYS.messages, updated);
    return updated;
  };

  const getCurrentUser = () => {
    return getValue(STORAGE_KEYS.currentUser, null);
  };

  const setCurrentUser = (user) => {
    setValue(STORAGE_KEYS.currentUser, user);
  };

  const getUserByEmail = (email) => {
    const users = getValue(STORAGE_KEYS.users, []);
    return users.find((user) => user.email.toLowerCase() === email.toLowerCase()) || null;
  };

  const registerUser = (payload) => {
    const users = getValue(STORAGE_KEYS.users, []);
    const user = { id: `u-${Date.now()}`, ...payload, role: payload.role || 'Guest' };
    users.push(user);
    setValue(STORAGE_KEYS.users, users);
    setCurrentUser(user);
    return user;
  };

  const updatePropertyStatus = (id, status) => {
    const properties = getProperties().map((property) => {
      if (property.id === id) return { ...property, status, availability: status };
      return property;
    });
    setValue(STORAGE_KEYS.properties, properties);
  };

  const getLocations = () => {
    return window.CopartmentData?.locations || [];
  };

  const getTestimonials = () => {
    return window.CopartmentData?.testimonials || [];
  };

  window.CopartmentUtils = {
    STORAGE_KEYS,
    formatCurrency,
    getValue,
    setValue,
    loadSeedData,
    getProperties,
    getPropertyById,
    saveProperty,
    getSavedProperties,
    createBooking,
    getBookings,
    createProperty,
    getNotifications,
    markNotificationRead,
    getMessages,
    sendMessage,
    getCurrentUser,
    setCurrentUser,
    getUserByEmail,
    registerUser,
    updatePropertyStatus,
    getLocations,
    getTestimonials
  };
})();
