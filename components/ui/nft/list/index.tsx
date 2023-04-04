// import Image from 'next/image';
// import { useListedNfts } from '@hooks/web3';
// import NFTMarket from '@ui/layout/Home/NFTMarket';
// import { FunctionComponent } from 'react';
// import nftsData from '../../../../content/nfts.json';

// const NftList: FunctionComponent = () => {
//   const { nfts } = useListedNfts();
//   return (
//     <section>
//       <h2 className='text-blue dark:text-white uppercase text-4xl flex gap-4 items-center'>
//         Hot Auctions
//         <Image
//           src='/assets/icons/HOTAUCTIONS.png'
//           width={40}
//           height={40}
//           alt='tarot'
//         />
//       </h2>
//       <div className='mt-12 max-w-lg mx-auto grid grid-cols-2 gap-5 lg:grid-cols-5 lg:max-w-none'>
//         {nfts.data.slice(0, 5).map(nft => (
//           <NFTMarket
//             key={nft.tokenId}
//             image={nft.meta?.image || ''}
//             name={nft.meta?.name || ''}
//             price={nft.price}
//             tokenId={nft.tokenId}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default NftList;





import { useListedNfts } from "@hooks/web3";
import { FunctionComponent } from "react";
import NftItem from "../item";


const NftList: FunctionComponent = () => {
  const { nfts } = useListedNfts();

  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      { nfts.data?.map(nft =>
        <div key={nft.meta ? nft.meta.image : ""} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <NftItem
            item={nft}
            buyNft={nfts.buyNft}
          />
        </div>
      )}
    </div>
  )
}

export default NftList;
