import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const UseMenu = () => {
    // const[menus, setMenus] = useState([]);
    // const[loading, setLoading] = useState(true)

    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res =>res.json())
    //     .then(data =>{
    //         setLoading(false)
    //         setMenus(data)
    //     })
    // },[]);

    const axiosPublic = useAxiosPublic();


    const {data: menu =[], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/menu')
            return res.data
        }
    })

    return [menu, loading, refetch]

    

};

export default UseMenu;