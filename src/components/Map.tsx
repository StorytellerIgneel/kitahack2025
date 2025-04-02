const Map = () => {
    return (
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.092207185527!2d101.6822012!3d3.1408535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37f384ab5bfb%3A0xd48e42e9911d12a5!2sKuala%20Lumpur!5e0!3m2!1sen!2smy!4v1711632145000"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default Map;