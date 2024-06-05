import AddTodo from "@/components/shared/AddTodo";
import Todo from "@/components/shared/Todo";
import { prisma } from "@/utils/prisma";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

const Home = async () => {
  const data = await getData();

  console.log(data);
  return (
    <div className="w-screem py-20 flex justify-center items-center flex-col gap-2">
      <span className="bg-clip-text text-transparent bg-gradient-to-t from-orange-500  via-orange-500 to-orange-700 text-3xl font-extrabold uppercase tracking-wider">
        To-do-app
      </span>

      <h1 className="text-3xl font-extrabold uppercase mb-5">Next.js 14</h1>

      <div className="flex justify-center flex-col items-center w-[1000px]">
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 md:w-2/3 w-[79vw]">
          {data.map((todo, id) => (
            <div className="w-full text-black bg-gray-100" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
