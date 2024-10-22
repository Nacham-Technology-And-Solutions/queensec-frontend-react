<?php

namespace App\Console\Commands;

use App\Models\TaxTicket;
use Carbon\Carbon;
use Illuminate\Console\Command;

class ExpireTickets extends Command
{ 
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:expire-tickets';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Expire tickets that have passed the valid until date';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $today = Carbon::now()->format('Y-m-d');

        // Find all active tickets where valid_until is less than today's date
        $tickets = TaxTicket::where('status', 'active')
            ->where('valid_until', '<', $today)
            ->get();

        foreach ($tickets as $ticket) {
            $ticket->status = 'expired';
            $ticket->save();

            $this->info("Expired ticket ID: {$ticket->id}");
        }

        $this->info('Ticket expiration process completed.');
    }
}
 
