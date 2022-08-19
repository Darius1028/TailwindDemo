export const Home = () => {
  return (
<div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700 mt-6">
  <h2 className="font-semibold text-3xl mb-5">Previewing layouts and visual mockups.</h2>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <hr className="my-6 border-gray-300" />
  <img className="float-right ..." src="assets/vuejs.png" />
  <p>
  <a className="underline decoration-sky-500">My Company, Inc</a>.
    It uses utility classNamees for typography and spacing to space content out within the larger
    container.
  </p>
  <button
    type="button"
    className="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
  >
    Learn more
  </button>
</div>
  );
};


