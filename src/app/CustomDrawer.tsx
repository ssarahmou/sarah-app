'use client';
 
import { clsx } from 'clsx';
import { useState } from 'react';
import { Drawer } from 'vaul';
const snapPoints = ['148px', '355px', 1];

export default function CustomDrawer() {
    const [snap, setSnap] = useState<number | string | null>(snapPoints[0]);
    return (
      <Drawer.Root snapPoints={snapPoints} activeSnapPoint={snap} setActiveSnapPoint={setSnap}>
        <Drawer.Trigger className="flex flex-col mt-8 bg-sle p-3 rounded-lg bg-slate-400" type = "submit" >See Reviews</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content data-testid="content"
          className="fixed flex flex-col bg-white border border-gray-200 border-b-none rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]"
        >
          <div
            className={clsx('flex flex-col max-w-md mx-auto w-full p-4 pt-5', {
              'overflow-y-auto': snap === 1,
              'overflow-hidden': snap !== 1,
            })}
          >
            <div className="flex items-center">
              <svg
                className="text-yellow-400 h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="text-yellow-400 h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="text-yellow-400 h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="text-yellow-400 h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="text-yellow-400 h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <Drawer.Title className="text-2xl mt-2 font-medium text-gray-900">Website rating</Drawer.Title>
            <p className="text-sm mt-1 text-gray-600 mb-6">40 ratings, 20+ images</p>
            <p className="text-gray-600">
              Lots of people love this website! See what they say about it!
            </p>
            <div className="mt-12">
              <h2 className="text-xl font-medium text-gray-900">The Details</h2>
              <div className="space-y-4 mt-4">
                <div>
                  <span className="block text-gray-900">Review 1</span>
                  <span className="text-gray-600">So cool I really liked the interactivity of inputting my information.</span>
                </div>
                
                
              </div>
            </div>
            <div className="mt-12">
              <figure>
                <blockquote className="font-serif text-gray-900">
                  “I especially loved the specificity the prompt gave me. That was so useful, learned a lot by just reading it.
                  Can&rsquo;t wait for more content!”
                </blockquote>
                <figcaption>
                  <span className="text-sm text-gray-600 mt-2 block">Yvonne Ray, Frontend Developer</span>
                </figcaption>
              </figure>
            </div>

          </div>
        </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }