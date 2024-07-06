import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import HomeIcon from '@mui/icons-material/Home';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
const routes = [
    {
        path: "/",
        content: "Asosiy",
        icon: <HomeIcon/>
    },
    {
        path: "/service",
        content: "Xizmatlar",
        icon: <LocalPostOfficeIcon/>
    },
    {
        path: "/orders",
        content: "Buyurtmalar",
        icon: <BorderStyleIcon/>
    },
]

export default routes