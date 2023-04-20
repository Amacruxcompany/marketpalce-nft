/* eslint-disable @next/next/no-img-element */

import { FunctionComponent } from "react";
import { NftMeta, Nft } from "../../../../types/nft";

type NftItemProps = {
  item: Nft;
  buyNft: (token: number, value: number) => Promise<void>;
}

function shortifyAddress(address: string) {
  return `0x****${address.slice(-4)}`
}

const NftItem: FunctionComponent<NftItemProps> = ({ item, buyNft }) => {
  if(item.meta && item.creator && item.tokenId) {
    return (
      <>
        <div className="flex-shrink-0">
          <img
            className={`h-full w-full object-cover`}
            src={item.meta.image}
            alt="New NFT"
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between" >
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center mt-2">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src="/images/default_avatar.png"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-indigo-600">Creator</p>
                  <p className="text-xs font-medium text-black">{shortifyAddress(item.creator)}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-indigo-600">
                Amacrux NFT
              </p>
            </div>
            <div className="block mt-2">
              <p className="text-xl font-semibold text-black">{item.meta.name}</p>
              <p className="mt-3 mb-3 text-base text-black">{item.meta.description}</p>
            </div>
          </div>
          <div className="overflow-hidden mb-4">
            <dl className="-mx-4 -mt-4 flex flex-wrap">
              <div className="flex flex-col px-4 pt-4">
                <dt className="order-2 text-sm font-medium ">Price</dt>
                <dd className="order-1 text-xl font-extrabold text-indigo-600">
                  <div className="flex justify-center items-center">
                    {item.price}
                    {/* <img className="h-6" src="/images/small-eth.webp" alt="ether icon" /> */}
                    <img className="h-6" src="/images/bnb-logo.webp" alt="bnb icon" />
                  </div>
                </dd>
              </div>

            </dl>
          </div>
          <div>
            <button
              onClick={() => {
                item.tokenId && item.price ? buyNft(item.tokenId, item.price) : ''
              }}
              type="button"
              className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed mr-2 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Buy
            </button>
            <button
              type="button"
              className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Preview
            </button>
          </div>
        </div>
      </>
    )
  }
  return (
 
    <>
   
   </>
   
   )
}

export default NftItem;
