import { useApps } from './useApps';

const AppsDiscovery = () => {
  const { data, loading, error } = useApps('', '', 1, 25);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Connection</th>
          </tr>
        </thead>
        <tbody>
          {data?.appRows.map((app) => (
            <tr key={app.appId}>
              <td>{app.appName}</td>
              <td>{app.category}</td>
              <td>{app.appSources.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppsDiscovery;
