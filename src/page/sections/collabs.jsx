import notion from "../../assets/notion.png";
const Collabs = () => {
  return (
    <section className="my-18 flex flex-col items-center justify-center gap-6">
      <div className="text-[34px] font-bold text-balance">
        More than 25,000 teams use Collabs
      </div>
      <div>
        <img src={notion} alt="" />
      </div>
    </section>
  );
};

export default Collabs;
