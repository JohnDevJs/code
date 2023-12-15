import React, { useCallback, useState } from "react";
import { shuffle } from "@/utils"; // Assuming shuffle is correctly implemented in your utils
import Search from "./Search";

const allUsers = ["john", "alex", "george", "simon", "james"];

interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text: string) => {
    setUsers((prevUsers) => {
      const filteredUsers = allUsers.filter((user) => user.includes(text));
      return filteredUsers;
    });
  }, []);

  return (
    <div className="tutorial">
      <div className="align-center mb-2 flex">
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Demo;
