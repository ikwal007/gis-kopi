<?php

namespace Database\Seeders;

use App\Models\Map;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MapSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Map::create([
            'name' => 'warkop pamor',
            'alamat' => 'G8MJ+2FF, Jl. AMD Manunggal XLI, Batoh, Kec. Lueng Bata, Kota Banda Aceh, Aceh 23122',
            'lat' => '5.5326742012811',
            'lng' => '95.331182331895'
        ]);
        Map::create([
            'name' => 'warkop jalur gaza',
            'alamat' => 'Batoh, Kec. Lueng Bata, Kota Banda Aceh, Aceh 23122',
            'lat' => '5.5322779004087',
            'lng' => '95.330926093111'
        ]);
        Map::create([
            'name' => 'warkop kuba',
            'alamat' => 'Batoh, Kec. Lueng Bata, Kota Banda Aceh, Aceh 23122',
            'lat' => '5.5323210619027',
            'lng' => '95.330543706069'
        ]);
        Map::create([
            'name' => 'Kedai Tubruk Khupi Khop',
            'alamat' => 'G8JH+VMX, Jl. AMD, Batoh, Kec. Lueng Bata, Kota Banda Aceh, Aceh 23122',
            'lat' => '5.5322935954928',
            'lng' => '95.329223090951'
        ]);
        Map::create([
            'name' => 'Kedai Kopi',
            'alamat' => 'G8MH+2P2, Batoh, Kec. Lueng Bata, Kota Banda Aceh, Aceh',
            'lat' => '5.532572183255',
            'lng' => '95.329294049372'
        ]);
    }
}
