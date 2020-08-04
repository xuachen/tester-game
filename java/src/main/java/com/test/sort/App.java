package com.test.sort;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        System.out.println("Hiya!");
    }
}

public class SomeSort implements SortAlgorithm {
    @Override
    public <T extends Comparable<T>> T[] sort(T[] array) {
    }

    public static void main(String[] args) {
        SomeSort pancakeSort = new SomeSort();
        pancakeSort.sort(arr);
    }
}

