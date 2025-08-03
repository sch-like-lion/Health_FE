'use client';

import { useAtom } from 'jotai';
import { counterAtom } from '../store/atoms';

export default function JotaiExample() {
  const [counter, setCounter] = useAtom(counterAtom);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Jotai 카운터 테스트</h2>
          <button 
            onClick={() => setCounter(c => c + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            증가
          </button>
          <button 
            onClick={() => setCounter(c => c - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            감소
          </button>
    </div>
  );
} 