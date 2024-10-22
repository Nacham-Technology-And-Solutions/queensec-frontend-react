<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Node\ArrayItem;
use PhpParser\Node\Expr\Cast\Object_;

class OrderHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'ticket_id',
        'payment_type',
        'installment_status',
        'amount_paid',
        'total_amount',
        'payment_status',
        'status',
        'action',
        'old_value',
        'new_value',
        'changed_by',
        'payment_method',
        'reference_code'
    ];

    // Relations to the Order and Ticket models
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function ticket()
    {
        return $this->belongsTo(TaxTicket::class);
    }

    public function changedBy()
    {
        $changedBy = null;
        if ($this->changed_by_user_type == 'admin') {
            $changedBy = AdminUser::find($this->changed_by_id);
        } else if ($this->changed_by_user_type == 'customer') {
            $changedBy = User::find($this->changed_by_id);
        } else if ($this->changed_by_user_type == 'vender') {
            $changedBy = User::find($this->changed_by_id);
        } else if ($this->changed_by_user_type == 'system') {
            $changedBy = AdminUser::find(1);
        }
        // dd($changedBy);
        return $changedBy;
    }
}
