
import TopBox from './TopBox.tsx';
import Footer from './Footer.tsx';

const AdminPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <TopBox onClose={function (): void {
              throw new Error('Function not implemented.');
          } } />
      
      <div className="container mx-auto py-8">
        <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-8 text-center">Admin Login / Sign Up</h2>
          
          {/* Sign Up Form */}
          <form>
            <h3 className="text-lg font-semibold mb-4">Sign Up</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" className="form-input mt-1 block w-full rounded-md border-gray-300" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="form-input mt-1 block w-full rounded-md border-gray-300" />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign Up</button>
          </form>
          
          <hr className="my-8" />
          
          {/* Login Form */}
          <form>
            <h3 className="text-lg font-semibold mb-4">Login</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" className="form-input mt-1 block w-full rounded-md border-gray-300" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="form-input mt-1 block w-full rounded-md border-gray-300" />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminPage;
