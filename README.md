
A simple program that finds the seating arrangement for passengers for a given custom airplane seat layout.

Usage
yarn start "<seat_layout>" "<passengers_count>"

Tests & Coverage
yarn run coverage

    For example, for the layout —

    ```json
    [[1, 2], [3, 2]]
    ```

    The mapping built is —

    ```json
    {
        '0_0_0': 'W',
        '1_0_0': 'A',
        '1_1_0': 'M',
        '1_2_0': 'W',
        '0_0_1': 'W',
        '1_0_1': 'A',
        '1_1_1': 'M',
        '1_2_1': 'W'
    }
    ```