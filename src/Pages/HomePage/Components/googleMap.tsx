export const GoogleMaps = () => {
  return (
    <>
      <div className="bg-white p-10 text-center">
        <div>
          <h1 className="text-[50px] text-[#360000] font-bold">
            NOSSA LOCALIZAÇÃO
          </h1>
          <p className="text-[20px] text-[#5E5E5E] font-bold">
            Estamos localizados em um ponto de fácil acesso. Venha nos visitar e
            experimente o melhor frango assado da região!
          </p>
        </div>

        <div className="mt-10 p-4 bg-[#C0C0C0] rounded-xl shadow-2xl">
          <iframe
            title="Localização do Galettitos"
            className="rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.850501536927!2d-40.33612712554587!3d-20.347793751452894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83ddedba92f57%3A0xe2a395bf2e90003d!2sAv.%20Fernando%20Ant%C3%B4nio%20da%20Silveira%2C%20452%20-%20Santa%20Rita%2C%20Vila%20Velha%20-%20ES%2C%2029118-450!5e0!3m2!1spt-BR!2sbr!4v1745671715471!5m2!1spt-BR!2sbr"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};
