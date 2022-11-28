using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution
{
    static List<ulong> primes = new() { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199 };

    static ulong biggest = 199;

    private static ulong[] aSieve30 = new ulong[]
         {7, 11, 13, 17, 19, 23, 29, 31};

    public static ulong FirstDivisor(ulong candidatePrime)
    {
        if (candidatePrime == 0)
            throw new ArgumentException("Zero is an invalid parameter!");

        List<ulong> firstPrimes =
               new List<ulong>(new ulong[] { 2, 3, 5 });

        ulong WheelFactor = 30;

        if (candidatePrime == 1)
        {
            return 0;
        }
        foreach (ulong prime in firstPrimes)
        {
            if (candidatePrime % prime == 0) return prime;
        }

        ulong theSqrt = (ulong)Math.Sqrt((double)candidatePrime);

        for (ulong pass = 0; pass < theSqrt; pass += WheelFactor)
        {
            foreach (ulong sieve in aSieve30)
            {
                if (candidatePrime % (pass + sieve) == 0)
                {
                    return pass + sieve;
                }
            }
        }

        return candidatePrime;
    }

    public static bool IsPrime(ulong primeSuspect)
    {
        if (primeSuspect == 0) return false;
        return (FirstDivisor(primeSuspect) == primeSuspect);
    }

    static ulong GetPrime(int primeIndex)
    {
        if (primeIndex == primes.Count)
        {
            bool found;
            do
            {
                biggest++;
                biggest++;
                found = IsPrime(biggest);
            } while (!found);

            primes.Add(biggest);
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

            while (value % prime == 0)
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
