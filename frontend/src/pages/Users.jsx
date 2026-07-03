import { useEffect, useState } from "react";
import API from "../services/api";

function Users() {

    const [users, setUsers] = useState([]);

    const [formData, setFormData] = useState({

        fullName: "",
        email: "",
        password: "",
        role: ""

    });
    const [editing, setEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const loadUsers = () => {

        API.get("/users")

            .then((res) => {

                setUsers(res.data);

            })

            .catch((err) => {

                console.log(err);

            });

    };

    useEffect(() => {

        loadUsers();

    }, []);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const addUser = () => {

        API.post("/users", formData)

            .then(() => {

                alert("User Added Successfully");

                loadUsers();

                setFormData({

                    fullName: "",

                    email: "",

                    password: "",

                    role: ""

                });

            })

            .catch((err) => {

                console.log(err);

            });

    };

    const deleteUser = (id) => {

        API.delete(`/users/${id}`)

            .then(() => {

                alert("User Deleted");

                loadUsers();

            });

    };   

        const editUser = (user) => {

    setEditing(true);

    setEditingId(user.userId);

    setFormData({
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        role: user.role
    });

};
    const updateUser = () => {

    API.put(`/users/${editingId}`, formData)

        .then(() => {

            alert("User Updated Successfully");

            loadUsers();

            setEditing(false);

            setEditingId(null);

            setFormData({
                fullName: "",
                email: "",
                password: "",
                role: ""
            });

        })

        .catch((err) => console.log(err));

};
    return (

        <div className="container mt-4">

            <h2 className="mb-4">

                Users Management

            </h2>

            <div className="card p-4 mb-4">

                <div className="row">

                    <div className="col-md-3">

                        <input

                            className="form-control"

                            placeholder="Full Name"

                            name="fullName"

                            value={formData.fullName}

                            onChange={handleChange}

                        />

                    </div>

                    <div className="col-md-3">

                        <input

                            className="form-control"

                            placeholder="Email"

                            name="email"

                            value={formData.email}

                            onChange={handleChange}

                        />

                    </div>

                    <div className="col-md-3">

                        <input

                            className="form-control"

                            placeholder="Password"

                            name="password"

                            value={formData.password}

                            onChange={handleChange}

                        />

                    </div>

                    <div className="col-md-3">

                        <input

                            className="form-control"

                            placeholder="Role"

                            name="role"

                            value={formData.role}

                            onChange={handleChange}

                        />

                    </div>

                </div>

                {
    editing ? (
        <button
            className="btn btn-success mt-3"
            onClick={updateUser}
        >
            Update User
        </button>
    ) : (
        <button
            className="btn btn-primary mt-3"
            onClick={addUser}
        >
            Add User
        </button>
    )
}

            </div>

            <table className="table table-bordered table-striped">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>

                        <th>Full Name</th>

                        <th>Email</th>

                        <th>Role</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        users.map((user) => (

                            <tr key={user.userId}>

                                <td>{user.userId}</td>

                                <td>{user.fullName}</td>

                                <td>{user.email}</td>

                                <td>{user.role}</td>

                               <td>

    <button
        className="btn btn-warning btn-sm me-2"
        onClick={() => editUser(user)}
    >
        Edit
    </button>

    <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteUser(user.userId)}
    >
        Delete
    </button>

</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Users;