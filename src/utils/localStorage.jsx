
const employees = [
    {
        "id": 1,
        "firstName": "Amit",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Submit Report",
                "taskDescription": "Submit the monthly design report.",
                "taskDate": "2025-02-10",
                "category": "Work",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend the weekly team meeting.",
                "taskDate": "2025-02-11",
                "category": "Meeting",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Designing",
                "taskDescription": "Making design of current project.",
                "taskDate": "2025-02-12",
                "category": "Client Work",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Priya",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review pull requests from team members.",
                "taskDate": "2025-02-09",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Write Documentation",
                "taskDescription": "Update API documentation.",
                "taskDate": "2025-02-10",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Rahul",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 3,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Fix Bugs",
                "taskDescription": "Resolve issues in the production system.",
                "taskDate": "2025-02-08",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Update Server",
                "taskDescription": "Perform maintenance on the production server.",
                "taskDate": "2025-02-10",
                "category": "IT",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Sneha",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 2,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "Design Mockups",
                "taskDescription": "Create UI/UX mockups for the new feature.",
                "taskDate": "2025-02-11",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Feedback Session",
                "taskDescription": "Discuss design feedback with the team.",
                "taskDate": "2025-02-12",
                "category": "Meeting",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Vikram",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 3,
            "newTask": 0,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Prepare Presentation",
                "taskDescription": "Prepare slides for the upcoming meeting.",
                "taskDate": "2025-02-09",
                "category": "Work",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Send Emails",
                "taskDescription": "Respond to pending client emails.",
                "taskDate": "2025-02-10",
                "category": "Communication",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true
            }
        ]
    }
];



const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees, admin}
}