const MapContainer = () => {
  return (
    <div className="mt-0 md:mt-8 pr-3 map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.497923642947!2d6.107062912448253!3d50.78488017153976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0994656d11507%3A0x5b2c8d5cd107d71b!2sJ%C3%BClicher%20Str.%2C%20Aachen%2C%20Germany!5e0!3m2!1sen!2sng!4v1688206488288!5m2!1sen!2sng"
        className="w-full h-[250px] md:h-[300px] lg:h-[240px]"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapContainer;
