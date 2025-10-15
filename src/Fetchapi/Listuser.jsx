import { useEffect, useState } from "react";

const Listuser = () => {
  const [user, setUser] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const result = await response.json();
      setUser(result.users);
    };
    fetchData();
  }, []);

  const handle = (e) => {
    setsearch(e.target.value); // ✅ corrected case
  };

  const filterUser = user.filter((item) =>
    item.firstName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center" }}>User List</h2>

        {/* 🔍 Search Bar */}
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Search by first name..."
            value={search}
            onChange={handle}
            style={{
              padding: "8px",
              width: "250px",
              border: "1px solid gray",
              borderRadius: "5px",
            }}
          />
        </div>

        {/* 🧾 User Table */}
        <table
          border="1"
          cellPadding="8"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr style={{ background: "#f2f2f2" }}>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>City</th>
              <th>Country</th>
              <th>Phone</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {filterUser.map((item) => (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.gender}</td>
                <td>{item.age}</td>
                <td>{item.address?.city}</td>
                <td>{item.address?.country}</td>
                <td>{item.phone}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.firstName}
                    width="50"
                    style={{ borderRadius: "50%" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Listuser;
