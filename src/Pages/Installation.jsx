import React, { useState } from 'react';
import iconDownload from '../assets/icon-downloads.png'
import iconStar from '../assets/icon-ratings.png'
import AppNotFound from './AppNotFound';
import { loadInstallApps, removeFromInstallApps } from '../utils/localStorage';
import LoadingSpinner from '../Components/LoadingSpinner';
import { toast } from 'react-toastify';

const Installation = () => {
  const [install, setInstall] = useState(() => loadInstallApps())
  const [sortOrder, setSortOrder] = useState('none')

  const [pageLoading, setPageLoading] = useState(true);

  if (pageLoading) {
    setTimeout(() => {
      setPageLoading(false);
    }, 600);

    return <LoadingSpinner />;
  }

  if (!install.length) return <div className='mb-5 lg:mb-20'><AppNotFound /></div>



  const sortedApps = () => {
    if (sortOrder === 'asc') {
      return [...install].sort((a, b) => parseFloat(a.downloads) - parseFloat(b.downloads))
    } else if (sortOrder === 'desc') {
      return [...install].sort((a, b) => parseFloat(b.downloads) - parseFloat(a.downloads))
    } else {
      return install
    }
  }

  const handleRemove = (id) => {
    // remove from localSrorage
    removeFromInstallApps(id)
    //for ui instant update
    setInstall(prev => prev.filter(a => a.id !== id))
    toast.success('App uninstalled successfully...!');
  }


  return (
    <div className='px-3 lg:px-20 mb-7 lg:mb-20'>
      <div className="text-center mt-6 md:mt-16 lg:mt-20">
        <h1 className="text-4xl lg:text-5xl font-bold">Your Installed Apps</h1>
        <p className="text-[#627382] text-xl mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center mt-10 ">
        <h2 className="font-bold text-lg md:text-2xl text-[#001931]">{install.length} Apps Found</h2>
        <label className="form-control w-full max-w-xs">
          <select
            className="select "
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option className='text-[#627382]' value="none">Sort By Downloads</option>
            <option value="asc">Low -&gt; High</option>
            <option value="desc">High -&gt; Low</option>
          </select>
        </label>
      </div>

      <div className='space-y-3 mt-4'>
        {
          sortedApps().map(a => (
            <div
              key={a.id}
              className="bg-base-100 shadow-sm p-4 flex flex-col md:flex-row  justify-between md:items-center rounded-lg"
            >
              <div className="flex gap-4 items-center">
                <figure className="w-20">
                  <img src={a.image} alt="Movie" />
                </figure>
                <div className="space-y-2">
                  <h2 className="text-xl font-medium">
                    {a.title} : {a.companyName}
                  </h2>
                  <div className="flex gap-5">
                    <div className="flex justify-between items-center gap-2">
                      <img
                        className="w-4 h-4"
                        src={iconDownload}
                        alt=""
                      />
                      <span className="text-[#00D390]">{a.downloads}</span>
                    </div>

                    <div className="flex justify-between items-center gap-2">
                      <img className="w-4 h-4" src={iconStar} alt="" />
                      <span className="text-[#FF8811]">{a.ratingAvg}</span>
                    </div>

                    <span className="text-[#627382]">{a.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleRemove(a.id)}
                className="btn bg-[#00D390] text-white "
              >
                Uninstall
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Installation;