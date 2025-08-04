const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBoth = async () => {
      try {
        const [userRes, settingsRes] = await Promise.all([
          fetch("/api/users"),
          fetch("/api/settings"),
        ]);

        if (!userRes.ok || !settingsRes.ok) {
          throw new Error("One or more requests failed.");
        }

        const [usersData, settingsData] = await Promise.all([
          userRes.json(),
          settingsRes.json(),
        ]);

        setUsers(usersData);
        setSettings(settingsData);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchBoth();
  }, []);