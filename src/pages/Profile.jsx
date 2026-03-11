import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {

  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUser(res.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-xl mx-auto bg-white shadow rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-4">
          My Profile
        </h2>

        <p className="mb-2">
          <span className="font-medium">Name:</span> {user.name}
        </p>

        <p>
          <span className="font-medium">Email:</span> {user.email}
        </p>

      </div>

    </div>
  );
}

export default Profile;