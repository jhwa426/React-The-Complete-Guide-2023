// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage (DONE)
//    - EventsPage (DONE)
//    - EventDetailPage (DONE)
//    - NewEventPage (DONE)
//    - EditEventPage (DONE)

// 2. Add routing & route definitions for these five pages
//    - / => HomePage (DONE)
//    - /events => EventsPage (DONE)
//    - /events/<some-id> => EventDetailPage (DONE)
//    - /events/new => NewEventPage (DONE)
//    - /events/<some-id>/edit => EditEventPage (DONE)

// 3. Add a root layout that adds the <MainNavigation> component above all page components (DONE)

// 4. Add properly working links to the MainNavigation (DONE)

// 5. Ensure that the links in MainNavigation receive an "active" class when active (DONE)

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage (DONE)

// 7. Output the ID of the selected event on the EventDetailPage (DONE)

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components (DONE)

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from "../src/pages/Root";
import HomePage from "../src/pages/HomePage";
import EventsPage from "../src/pages/EventsPage";
import EventDetailPage from "../src/pages/EventDetailPage";
import NewEventPage from "../src/pages/NewEventPage";
import EditEventPage from "../src/pages/EditEventPage";
import EventRoot from "../src/pages/EventRoot";



const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "events",
                element: <EventRoot />,
                children: [
                    { index: true, element: <EventsPage /> },
                    { path: ":eventId", element: <EventDetailPage /> },
                    { path: "new", element: <NewEventPage /> },
                    { path: ":eventsId/edit", element: <EditEventPage /> },
                ]
            },
        ],
    }
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
