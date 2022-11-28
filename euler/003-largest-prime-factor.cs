using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

/*
 * https://www.codeproject.com/Articles/31085/Prime-Number-Determination-Using-Wheel-Factorizati
 * https://social.technet.microsoft.com/wiki/contents/articles/21558.prime-number-sieve.aspx
 * https://algotree.org/algorithms/numeric/prime_sieve/
 */

class Solution
{
    static readonly List<ulong> primes = new() { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199 };
    static readonly ulong[] sieve30 = new ulong[] { 7, 11, 13, 17, 19, 23, 29, 31 };
    static readonly ulong WheelFactor = 30;
    static int sieveIndex = 7;
    static ulong wheelIndex = 180;

    public static ulong FirstDivisor(ulong primeSuspect)
    {
        var upper = (ulong)Math.Sqrt(primeSuspect);

        for (ulong i = 0; i < upper; i += WheelFactor)
        {
            foreach (ulong sieve in sieve30)
            {
                if (primeSuspect % (i + sieve) == 0)
                {
                    return i + sieve;
                }
            }
        }

        return primeSuspect;
    }

    public static bool IsPrime(ulong primeSuspect)
    {
        return FirstDivisor(primeSuspect) == primeSuspect;
    }

    static ulong GetPrime(int primeIndex)
    {
        if (primeIndex == primes.Count)
        {
            ulong candy;
            bool found;
            do
            {
                candy = sieve30[sieveIndex] + wheelIndex;
                if (sieveIndex == 7)
                {
                    sieveIndex = 0;
                    wheelIndex += WheelFactor;
                } else
                {
                    sieveIndex++;
                }
                found = IsPrime(candy);
            } while (!found);

            primes.Add(candy);

            return candy;
        }

        return primes[primeIndex];
    }

    static List<ulong> GetPrimeFactors(ulong value)
    {
        List<ulong> factors = new();

        int primeIndex = 0;
        do
        {
            ulong prime = GetPrime(primeIndex++);

            if (value % prime == 0)
            {
                value /= prime;
                factors.Add(prime);
            }
        } while (value != 1);

        return factors;
    }

    static void Main(String[] args)
    {
        DateTime start = DateTime.Now;
        ulong n = 690316297;

        if (n >= 10)
        {
            var factors = GetPrimeFactors(n);
            Console.WriteLine(factors.Last());
        }

        var elapsed = DateTime.Now - start;
        Console.WriteLine(elapsed.TotalMilliseconds.ToString());
    }
}
