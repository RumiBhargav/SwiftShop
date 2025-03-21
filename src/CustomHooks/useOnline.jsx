const useOnline=()=>{
   // const [online, setOnline] = useState(navigator.onLine);
   const [online, setOnline] = useState(true);

    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);
    useEffect(() => {
      window.addEventListener("online", goOnline);
      window.addEventListener("offline", goOffline);
      return () => {
        window.removeEventListener("online", goOnline);// suppose home visit 
        window.removeEventListener("offline", goOffline);
      };
    }, []);
    return online;
}