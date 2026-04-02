import Card from "../../components/card";
import user1 from "../../assets/profiles/an-shiraishi-icon.webp";
import user2 from "../../assets/profiles/mozu-icon.webp";
import user3 from "../../assets/profiles/ouri-sakaguchi-icon.webp";
import StarIcon from "../../assets/icons/star.jsx";

const Reviews = () => {
  const users = [
    {
      ranking: 5,
      name: "Liliana Adornato",
      role: "Casual reader",
      image: user1,
      review:
        "I love the variety of manga available on this platform. I can find almost any title I'm looking for, and the recommendations are always spot on.",
    },
    {
      ranking: 5,
      name: "Ouri Sakaguchi",
      role: "Manga enthusiast",
      image: user3,
      review:
        "Best manga reading platform i've used! The office mode is a lifesaver during my commute. The library is huge and I love the recommendations",
    },
    {
      ranking: 5,
      name: "Mozu Nile Shepherd",
      role: "Long-time reader",
      image: user2,
      review:
        "Finaly a platform that respects the work of the mangakas and the readers. Crystal clear pages, smooth scrolling, and they actually add new titles regularly. Worth every penny",
    },
  ];
  return (
    <section>
      <div className="layout py-22 flex flex-col items-center justify-center dark:bg-gray-900 dark:text-white">
        <div className="pt-6 pb-12 text-center tracking-wide">
          <h1 className="text-[40px] font-semibold ">
            Loved by manga readers worldwide
          </h1>
          <p className="text-[20px] text-gray-500 dark:text-gray-300">
            Join millions of readers who trust us for their daily manga fix.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {users.map((user) => (
            <div className="col-span-12 md:col-span-4">
              <Card
                key={user.name}
                bgColor="bg-gray-50"
                className="dark:border-gray-700 dark:border-1 w-full h-full"
              >
                <article className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    {Array.from({ length: user.ranking }).map((_, index) => (
                      <StarIcon
                        key={index}
                        fill="#FFD333"
                        color="#FFD333"
                        width={22}
                        height={22}
                      />
                    ))}
                  </div>
                  <p className="pb-4 text-pretty ">"{user.review}"</p>
                  <div className="flex gap-2">
                    <img
                      src={user.image}
                      alt=""
                      className="rounded-full w-12 h-12"
                    />
                    <div>
                      <p>{user.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {user.role}
                      </p>
                    </div>
                  </div>
                </article>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Reviews;
