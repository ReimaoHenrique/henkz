const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/pages/home",
      },
      {
        source: "/",
        destination: "/pages/home",
      },
      {
        source: "/agenda",
        destination: "/pages/agenda",
      },
      {
        source: "/songs",
        destination: "/pages/songs",
      },
      {
        source: "/eventos",
        destination: "/pages/eventos",
      },
      {
        source: "/eventos/evento-doido",
        destination: "/pages/eventos/evento-doido",
      },
    ];
  },
};

export default nextConfig;
